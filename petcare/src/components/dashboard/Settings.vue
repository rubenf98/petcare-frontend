<template>
  <div>
    <div class="jumbotron jumbotron-fluid homepage">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <h1 class="welcome welcome-message">
            Welcome,
            <span class="bold">user</span>
          </h1>

          <p class="welcome welcome-question">How are you today?</p>
        </div>
        <center>
          <div class="d-flex justify-content-between">
            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">26</span>
              <img src="/icon/animals.svg" class="icon" />
            </div>

            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">26</span>
              <img src="/icon/events.svg" class="icon" />
            </div>

            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">26</span>
              <img src="/icon/news.svg" class="icon" />
            </div>
          </div>
        </center>
      </div>
    </div>

    <div class="container-fluid background">
      <div class="content">
        <div class="section public-section shadow-sm p-3 mb-5 bg-white rounded">
          <img
            src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg"
            class="profile-image rounded"
          />
          <h1>Nome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore aperiam, ipsa quia fugit, debitis eos magni commodi quisquam repudiandae quo fuga earum. Placeat veniam nobis esse nostrum, ducimus eos.</p>
          <div>
            <img src="/icon/email.svg" class="data-icon" />
            <span>email</span>
          </div>

          <div>
            <img src="/icon/phone.svg" class="data-icon" />
            <span>phone</span>
          </div>

          <br />
          <span class="font-weight-bold">cidade</span>
          <p>estrada, porta</p>

          <div>
            <img src="/icon/bank.svg" class="data-icon" />
            <span>PT21983721938721937</span>
          </div>
        </div>
        <div class="section private-section shadow-sm p-3 mb-5 bg-white rounded">
          <form>
            <div class="form-group">
              <label for="inputAddress">Nome</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Telefone</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="+353927839123"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="inputAddress2">IBAN</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="PT 5020194012301293"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">País</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Código postal</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descrição</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  background-color: rgba(248, 253, 255, 0.678);
  height: 100%;
}
.profile-image {
  width: 60%;
  min-width: 100px;
  max-width: 300px;
  margin: 5% auto;
  display: block;
}
.jumbotron {
  height: 220px;
  background-image: url("/background/dashboard.png");
  background-attachment: fixed;
  background-size: cover;
  color: white;
  margin-bottom: 0;
}
.public-section {
  width: 30%;
}
.private-section {
  width: 60%;
}
@media (max-width: 768px) {
  .public-section,
  .private-section {
    width: 95%;
  }
}
.section {
  background-color: white;
  margin: 2% 0;
}
.content {
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.welcome-message {
  font-size: 1.5em;
}

.welcome-question {
  font-size: 1em;
}

.bold {
  font-weight: bold;
}

.icon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.data-icon {
  width: 25px;
  height: 25px;
  margin-right: 2%;
}

.data {
  margin: 0 10px;
}
</style>
