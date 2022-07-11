import { Component, OnInit } from "@angular/core";
import { GalleryCard } from "./gallery.cardList";

@Component({
  selector: 'app-test',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void { }
  galleryCard = GalleryCard;
}
