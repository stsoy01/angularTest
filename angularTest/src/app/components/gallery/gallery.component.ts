import { NgClass } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import { GalleryCard } from "./gallery.cardList";

@Component({
  selector: 'app-test',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  likes: number = 0;

  ngOnInit(): void { }
  galleryCard = GalleryCard;


  likeImg(i: number) {
    if (this.galleryCard[i].likes === 0) {
      this.galleryCard[i].likes++
    }
    console.log(this.galleryCard);

  }
  dislikeImg(i: number) {
    if (this.galleryCard[i].likes === 1) {
      this.galleryCard[i].likes--
    }
    // console.log(this.galleryCard);
  }

  newComment: any;
  addComment(i: number) {
    // console.log(this.newComment);
    this.galleryCard[i].comment = this.newComment;
    this.newComment = '';
  }


  openModal(i: number) {
    let modal = document.getElementsByClassName('modal')[0]
    modal.className = 'modal2'
    
    // console.log(modal.className);
    // let imgModal = this.galleryCard[i].link;
    // let sp = this.galleryCard[i].desc;
  }

  // closeModal(i: number) {
  //   let modal = document.getElementsByClassName('modal')[0]
  //   modal.className = 'modal';
  //   console.log(modal);
  //   console.log(modal.className);
  // }
}
