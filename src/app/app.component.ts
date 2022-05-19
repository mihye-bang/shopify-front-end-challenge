import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  }

  sendText(promptText: string): void {

    this.data.prompt = promptText;

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${atob("c2stQ1h4RXIzZWpkQzR1bWk0eEhWRHRUM0JsYmtGSkJNZWtxcDFTTFZGTlo1M2FOM2I4")}`,
      },
      body: JSON.stringify(this.data),
    }).then(r => {
      r.json()
        .then(r => {
          let response = {
            response: "",
            request: ""
          };

          response.response = r.choices[0].text;
          response.request = promptText;
          this.responseList.push(response);
        });
    });


  }


  fetchData(): void {

  }


}
