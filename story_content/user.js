function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6m6Kpjkj59x":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzYCTd4NtScv2fRHhJwERwtmClGsYARorylBGTpzPTyZ1qAkIPrniw2NkW56F1mtpeH/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

