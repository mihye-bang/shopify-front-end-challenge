import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  output: any;

  promptText: any;
  responseList: any = [];

  data: any = {
    prompt: "",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };


  ngOnInit(): void {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  `,
      },
      body: JSON.stringify(this.data),
    }).then(r => {
      r.json()
        .then(r => {
          this.output = r;
        });
    });
  }

  sendText(promptText: string): void {
    this.data.prompt = promptText;
    this.responseList.push(this.data);
    console.log(this.responseList);
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer `,
      },
      body: JSON.stringify(this.data),
    }).then(r => {
      r.json()
        .then(r => {
          this.output = r;
        });
    });

  }


}
