import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
      Id: 1,
      Name: 'House Stark',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'House Lannister',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 3,
      Name: 'House Tyrell',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 4,
      Name: 'House Martell',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 5,
      Name: 'House Targaryen',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 6,
      Name: 'House Baratheon',
      Type: 'House',
      Price: 12000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
