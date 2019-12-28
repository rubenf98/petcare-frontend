<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-login" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Sign In</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <form action="/examples/actions/confirmation.php" method="post">
            <div class="form-group">
              <img src="/icon/email.svg" />
              <input type="email" class="form-control" placeholder="Email" required="required" />
            </div>
            <div class="form-group">
              <img src="/icon/password.svg" />
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-login {
  color: #636363;
  max-width: 400px;
}
.modal-login .modal-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
}
.modal-login .modal-header {
  border-bottom: none;
  position: relative;
  justify-content: center;
}
.modal-login h4 {
  text-align: center;
  font-size: 26px;
}
.modal-login .form-group {
  position: relative;
}
.modal-login img {
  position: absolute;
  left: 13px;
  top: 11px;
  width: 18px;
}
.modal-login .form-control {
  padding-left: 40px;
}
.modal-login .form-control:focus {
  border-color: blue;
}
.modal-login .form-control,
.modal-login .btn {
  min-height: 40px;
  border-radius: 10px;
}
.modal-login .hint-text {
  text-align: center;
  padding-top: 10px;
}
.modal-login .close {
  position: absolute;
  top: -5px;
  right: -5px;
}
.modal-login .btn {
  background: blue;
  border: none;
  line-height: normal;
}
.modal-login .btn:hover,
.modal-login .btn:focus {
  background: blue;
}
.modal-login .modal-footer {
  background: #ecf0f1;
  border-color: #dee4e7;
  text-align: center;
  margin: 0 -20px -20px;
  font-size: 13px;
  justify-content: center;
  border-radius: 5px;
}
.modal-login .modal-footer a {
  color: #999;
}
.trigger-btn {
  display: inline-block;
  margin: 100px auto;
}
</style>
