<template>
<section id="contact" class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">
      Do you have any questions? Please do not hesitate to contact us directly.
    </p>
    <div class="row justify-content-center">
      <div class="col-md-9 mb-md-0 mb-5 p-2">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
          <div class="row">
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="name" name="name" class="form-control" placeholder="name">
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="email" name="email" class="form-control" placeholder="email">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <input type="text" id="subject" name="subject" class="form-control" placeholder="subject">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="md-form">
                <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea"
                  placeholder="your message"></textarea>
              </div>
            </div>
          </div>
        </form>

        <div class="text-center text-md-left">
          <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactInfo'
}
</script>