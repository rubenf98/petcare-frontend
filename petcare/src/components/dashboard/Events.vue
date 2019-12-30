<template>
  <div class="container-fluid background">
    <div class="layout">
      <div class="section section-form shadow-sm p-3 mb-5 bg-white rounded">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="date">Example textarea</label>
            <input type="date" name="date" id="date" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="section section-list shadow-sm p-3 mb-5 bg-white rounded">
        <div class="row">
          <ul class="timeline">
            <li>
              <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
              <a href="#" class="float-right">21 March, 2014</a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
            </li>
            <li>
              <a href="#">21 000 Job Seekers</a>
              <a href="#" class="float-right">4 March, 2014</a>
              <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
              <a href="#">Awesome Employers</a>
              <a href="#" class="float-right">1 April, 2014</a>
              <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.date {
  width: 200px;
}
.background {
  background-color: rgba(248, 253, 255, 0.678);
  height: 100%;
}
.layout {
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.section {
  background-color: white;
  margin: 2% 0;
}
.timeline {
  border: 2px solid red;
  width: 90%;
  margin: auto;
  display: block;
}
.section-form {
  width: 45%;
}
.section-list {
  width: 45%;
  max-height: 90vh;
  overflow: auto;
}
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22c0e8;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
@media (max-width: 768px) {
  .section-form,
  .section-list {
    width: 95%;
  }
}
</style>
