function askPassword(ok, fail) {
    let password = "password";
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(() => user.login(true), () => user.login(false));//John failed to log in