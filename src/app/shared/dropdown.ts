
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {
  // dynamically bind to a property of the element

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}