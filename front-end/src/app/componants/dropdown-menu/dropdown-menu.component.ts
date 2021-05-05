import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryServiceService} from '../../service/category-service.service';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryServiceService,
              private auth: AuthenticationServiceService) { }

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

  isAuth(){
    return this.auth.isLogin()
  }

}
