import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  constructor (private el: ElementRef) {
    this.el.nativeElement.innerHTML += 'Conteudo Inserido'
  }

  @Input()
  myTask: string

  @HostListener('click')
  onClick () {
    alert(this.myTask)
  }
}
