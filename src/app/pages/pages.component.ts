import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  activeUrl:string = ''
  constructor(private router: Router) { }

  ngOnInit() {
    this.listenRouter()
  }

  listenRouter(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // 导航开始时的处理逻辑
        console.log('NavigationStart', event);
        this.activeUrl = event.url;
      }
    });
  }


  baidu(){
    window.open("https://www.baidu.com","_blank")
  }

  jumpNotFound(){
    this.router.navigateByUrl('/pages/homeManage/notFound');
  }
}