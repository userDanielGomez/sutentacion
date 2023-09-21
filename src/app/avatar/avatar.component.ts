import { Component } from '@angular/core';
import { Parser } from 'expr-eval';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  input = '';

  sendValue(value: string) {
    if (this.input === '0' && value !== '0') {
      this.input = value;
    } else if (this.input !== '0' || value !== '0') {
      this.input += value;
    }
  }

  result(value: string) {
    try {
      const parser = new Parser();
      const expr = parser.parse(this.input);
      this.input = expr.evaluate({}).toString();
    } catch (error) {
      alert('SYNTAX ERROR');
      this.input = ' ';
      console.log(error);
    }
  }

  clear() {
    this.input = ' ';
  }

  delete() {
    this.input = this.input.substring(0, this.input.length - 1);
  }

  navegar() {}
}
