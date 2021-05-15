import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class HomeComponent implements OnInit {
	PREFIX = this.constructor.name;

	constructor() {
		console.log(2, this.PREFIX, 'constructor');
	}

	ngOnInit(): void {}
}
