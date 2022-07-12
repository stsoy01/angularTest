import { Component } from "@angular/core";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  likes: number = 0;

  likeImg() {
    this.likes++;
  }

  dislikeImg() {
    this.likes--;
  }
}
