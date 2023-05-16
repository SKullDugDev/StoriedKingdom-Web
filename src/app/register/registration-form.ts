import {FormGroup, FormControl} from "@angular/forms";
import {GameSelection} from "./GameSelection";

export interface RegistrationForm extends FormGroup<{
  username: FormControl<string>;
  email: FormControl<string>;
  gameSelections: FormControl<GameSelection[]>
}> {
}
