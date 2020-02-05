<template>
  <div>
    <div class="jumbotron jumbotron-fluid homepage">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <h1 class="welcome welcome-message">
            Bem Vindo,
            <span class="bold">user</span>
          </h1>

          <p class="welcome welcome-question">Como estás hoje?</p>
        </div>
        <center class="hide">
          <div class="d-flex justify-content-between">
            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">{{user.animals.length}}</span>
              <img src="/icon/animals.svg" class="icon" />
            </div>

            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">{{user.events.length}}</span>
              <img src="/icon/events.svg" class="icon" />
            </div>

            <div class="data d-flex justify-content-around align-items-center">
              <span class="bold welcome-message">{{user.posts.length}}</span>
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
          <h1>{{user.user.name}}</h1>
          <p>{{user.description}}</p>
          <div>
            <img src="/icon/email.svg" class="data-icon" />
            <span>{{user.user.email}}</span>
          </div>

          <div>
            <img src="/icon/phone.svg" class="data-icon" />
            <span>{{user.phoneNumber}}</span>
          </div>

          <br />
          <p>{{user.adress}}</p>

          <div>
            <img src="/icon/bank.svg" class="data-icon" />
            <span>{{user.iban}}</span>
          </div>
        </div>
        <div class="section private-section shadow-sm p-3 mb-5 bg-white rounded">
          <form>
            <div class="form-group">
              <label for="inputAddress">Nome</label>
              <input
                v-model="user.user.name"
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  v-model="user.user.email"
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
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
                  v-model="user.phoneNumber"
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="+353927839123"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input
                  v-model="user.adress"
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
                v-model="user.iban"
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="PT 5020194012301293"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descrição</label>
              <textarea v-model="user.description" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
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

@media (max-width: 768px) {
  .public-section,
  .private-section {
    width: 100%;
  }
  .hide {
    display: none;
  }
}
</style>
