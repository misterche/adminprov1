import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild ('txtprogress') txtprogreso: ElementRef
  @Input('nombre') leyenda:string ='Leyenda'
  @Input() progreso: number=50

  @Output() newValor: EventEmitter<number> = new EventEmitter()

  constructor() {}

  onChanges( newValue: number ){

  	// let elemHTML: any = document.getElementsByName('progreso')[0]


  	if( newValue >= 100 ){
  		this.progreso = 100
  	}else if ( newValue <= 0 ){
		this.progreso = 0
  	}else{
  		this.progreso=newValue
  	}

  	// elemHTML.value = this.progreso
  	this.txtprogreso.nativeElement.value = this.progreso

  	this.newValor.emit( this.progreso )
  	//console.log(newValue)
  }

  cambiarValor( valor: number){

  	this.progreso = this.progreso + valor

  	this.newValor.emit(this.progreso)

  	this.txtprogreso.nativeElement.focus()
  }

  ngOnInit() {
  }

}
