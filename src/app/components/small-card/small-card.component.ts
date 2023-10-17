import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover: string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus.jpg"

  @Input()
  cardTitle: string = "Nova série anunciada"

  constructor() { }

  ngOnInit(): void {}

}
