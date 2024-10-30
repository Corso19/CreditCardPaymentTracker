import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailFormComponent } from "./payment-details/payment-detail-form/payment-detail-form.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentDetailFormComponent, PaymentDetailsComponent, FormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
