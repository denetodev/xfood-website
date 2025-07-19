import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  private formSubscription?: Subscription;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        this.noNumbersValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.businessEmailValidator,
      ]),
      phone: new FormControl('', [Validators.required, this.phoneValidator]),
      restaurantName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      message: new FormControl('', [Validators.maxLength(500)]),
    });
  }

  ngOnInit() {
    // Auto-format phone number
    this.formSubscription = this.contactForm
      .get('phone')
      ?.valueChanges.pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((value) => {
        if (value && typeof value === 'string') {
          const formatted = this.formatPhoneNumber(value);
          if (formatted !== value) {
            this.contactForm
              .get('phone')
              ?.setValue(formatted, { emitEvent: false });
          }
        }
      });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  // Custom Validators
  private noNumbersValidator(control: AbstractControl) {
    const value = control.value;
    if (value && /\d/.test(value)) {
      return { hasNumbers: true };
    }
    return null;
  }

  private businessEmailValidator(control: AbstractControl) {
    const value = control.value;
    if (value) {
      const commonDomains = [
        'gmail.com',
        'hotmail.com',
        'yahoo.com',
        'outlook.com',
      ];
      const domain = value.split('@')[1]?.toLowerCase();

      // Sugestão de domínio comercial (não bloqueia, apenas avisa)
      if (commonDomains.includes(domain)) {
        return { suggestBusiness: true };
      }
    }
    return null;
  }

  private phoneValidator(control: AbstractControl) {
    const value = control.value;
    if (value) {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length < 10 || cleaned.length > 11) {
        return { invalidPhone: true };
      }

      // Validação básica de números brasileiros
      if (cleaned.length === 11 && !cleaned.startsWith('0')) {
        const ddd = parseInt(cleaned.substring(0, 2));
        if (ddd < 11 || ddd > 99) {
          return { invalidDDD: true };
        }
      }
    }
    return null;
  }

  // Format phone number as user types
  private formatPhoneNumber(value: string): string {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 2) {
      return cleaned;
    } else if (cleaned.length <= 7) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
    } else if (cleaned.length <= 11) {
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
        2,
        7
      )}-${cleaned.substring(7)}`;
    }

    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      7
    )}-${cleaned.substring(7, 11)}`;
  }

  // Get error message for form fields
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      const errors = field.errors;

      if (errors['required']) {
        const fieldLabels: { [key: string]: string } = {
          name: 'Nome',
          email: 'E-mail',
          phone: 'WhatsApp',
          restaurantName: 'Nome do negócio',
        };
        return `${fieldLabels[fieldName]} é obrigatório`;
      }

      if (errors['email']) return 'Digite um e-mail válido';
      if (errors['minlength'])
        return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
      if (errors['maxlength'])
        return `Máximo de ${errors['maxlength'].requiredLength} caracteres`;
      if (errors['hasNumbers']) return 'Nome não deve conter números';
      if (errors['invalidPhone']) return 'Digite um telefone válido';
      if (errors['invalidDDD']) return 'DDD inválido';
    }
    return '';
  }

  // Check if field has specific error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field?.errors?.[errorType] && field.touched;
  }

  // Show business email suggestion
  showBusinessEmailSuggestion(fieldName: string): boolean {
    return this.hasError(fieldName, 'suggestBusiness');
  }

  // Submit form with enhanced UX
  async onSubmit() {
    if (this.contactForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;
    this.submitSuccess = false;

    try {
      // Simular envio (substitua pela sua lógica real)
      await this.simulateSubmit();
      this.submitSuccess = true;
      this.contactForm.reset();

      // Reset form state after success
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    } catch (error) {
      this.submitError = true;
      console.error('Erro ao enviar formulário:', error);

      // Reset error state after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  private async simulateSubmit(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Simular delay de rede
      setTimeout(() => {
        // Simular sucesso na maioria dos casos (90%)
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Erro simulado'));
        }
      }, 2000);
    });
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.contactForm.controls).forEach((key) => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  // Utility methods for template
  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  get formData() {
    return this.contactForm.value;
  }

  // WhatsApp direct contact method
  openWhatsApp() {
    const phone = '5561983179864';
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os serviços da XFood para delivery.`
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  }

  // Email direct contact method
  openEmail() {
    const email = 'consultoriaxfood@gmail.com';
    const subject = encodeURIComponent('Interesse nos serviços XFood');
    const body = encodeURIComponent(
      `Olá,\n\nGostaria de saber mais informações sobre os serviços da XFood para meu delivery.\n\nAguardo retorno.`
    );
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(url, '_self');
  }
}
