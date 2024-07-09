import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-pick',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-pick.component.html',
  styleUrl: './category-pick.component.css',
})
export class CategoryPickComponent {}
