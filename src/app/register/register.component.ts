import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, NonNullableFormBuilder, Validators} from "@angular/forms";
import {GameSelection} from "./GameSelection";
import {RegistrationForm} from "./registration-form";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  host: {'class': 'flex-component'}
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChild('purpleDiscordLogo') purpleDiscordLogo: ElementRef = {} as ElementRef;
  @ViewChild('registerText') registerText: ElementRef = {} as ElementRef;

  @Input() public games: string[] = ["D&D 5E", "PF2"];

  form! : RegistrationForm;
  roleSwitch! : FormControl<boolean>;
  gameOptions : GameSelection[] = [];


  constructor(private formBuilder: NonNullableFormBuilder) {}



  ngOnInit() {

    this.form = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      gameSelections: [this.gameOptions, Validators.required]

    })

    this.gameOptions = this.gamesToGameOptions();

    this.roleSwitch = this.formBuilder.control(false);

    this.roleSwitch.valueChanges.subscribe(value => {
      console.log(value);
      this.gameOptions = this.gamesToGameOptions(value);
    })

    this.form.controls.gameSelections.valueChanges.subscribe(value =>
      console.log(value));

  }

  ngAfterViewInit() {

    let doubleTextHeight: string = `${(this.registerText.nativeElement.offsetHeight / 10) * 2}rem`;
    this.purpleDiscordLogo.nativeElement.style.setProperty('height', doubleTextHeight);
  }

  get gameSelections(): GameSelection[] {
    return this.form.controls.gameSelections.value;
  }

  gamesToGameOptions(dm: boolean = false): GameSelection[] {

    return this.games.map(game => {

      if (this.gameSelections.length == 0) return new GameSelection(game, dm);

      let disabled: boolean = this.gameSelections.some(selection => selection.name === game && selection.dm !== dm);

      return new GameSelection(game, dm, disabled);

    })
  }




}
