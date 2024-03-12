import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[isEditable]',
    standalone: true,
})
export class EditableDirective {
  // custom element hinzufügen, würde auch über css gehen
  @HostBinding('attr.contentEditable') editable = true;
}
