import { Component, EventEmitter, Output } from "@angular/core";

// Decorator that marks a class as an Angular component 
// and provides configuration metadata that determines 
// how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  // @Output() lets the child send data to a parent component.
  // The child component uses the @Output() property to raise an event to notify the parent of the change.
  // To raise an event, an @Output() must have the type of EventEmitter
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}