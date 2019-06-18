import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent  {
  albums: Album[];

  constructor(private router: Router){}


   goToDetailPage(clickedAlbum: Album){
     this.router.navigate(['albums', clickedAlbum.id]);
   };
}
