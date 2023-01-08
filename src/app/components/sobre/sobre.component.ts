import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent   implements OnInit{
  ngOnInit() {

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }}
