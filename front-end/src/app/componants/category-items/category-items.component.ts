import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../service/category-service.service';
import {Category} from '../../model/category';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data
      }
    )
  }


}
