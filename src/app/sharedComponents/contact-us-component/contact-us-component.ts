import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us-component.html',
  styleUrls: ['./contact-us-component.css'],
})
export class ContactUsComponent {
  @Input() homecontact: boolean = false;
  contactForm: any;
  successMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, toastr:ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
    this.http
      .post(`${environment.backendUrl}/send-contact-email`, formData)
      .subscribe({
        next: (res: any) => {
          console.log('Email sent successfully:', res);
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();

          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Email error:', err);
          this.successMessage = 'There was an error sending your message. Please try again later.';

          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
      });
    }
  }
}
