<template>
  <footer>
    <div class="container">
      <div
        class="
          footer
          grid
          xl:grid-cols-4
          sm:grid-cols-1
          md:grid-cols-2
          text-white
        "
      >
        <div class="footer-logo">
          <img
            src="../public/home/Logo.svg"
            class="mb-2 logo"
            alt="footer logo"
          />
          <p class="text-xs leading-6">
            We give you a unique way to learn Arabic through a live video chat
            with native speakers!
          </p>
          <img
            src="../public/home/credit.png"
            class="xl:mt-12 md:mt-6 sm:mt-3 block"
            alt="footer credit"
          />
        </div>
        <div class="student">
          <h3 class="text-xl font-medium leading-7 footer-color">
            For Students
          </h3>
          <ul class="xl:mt-8 md:mt-4 sm:mt-2">
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                Login
              </router-link>
            </li>
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                Register
              </router-link>
            </li>
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                Blog
              </router-link>
            </li>
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                Terms and Conditions
              </router-link>
            </li>
            <li>
              <router-link class="text-white" to="/" aria-label="footer link">
                Privacy and Policies
              </router-link>
            </li>
          </ul>
        </div>
        <div class="teachers">
          <h3 class="text-xl font-medium leading-7 footer-color">
            For Teachers
          </h3>
          <ul class="xl:mt-8 md:mt-4 sm:mt-2">
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                How To Be A Teacher
              </router-link>
            </li>
            <li class="mb-4">
              <router-link class="text-white" to="/" aria-label="footer link">
                Apply Now
              </router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3 class="text-xl font-medium leading-7 footer-color">Contact Us</h3>
          <div class="xl:mt-8 md:mt-4 sm:mt-2">
            <div class="email flex items-center gap-2 mb-8">
              <img src="../public/home/email.svg" alt="email contact" />
              <span>info@friendlyarabic.com</span>
            </div>
            <ul class="xl:mb-12 md:mb-6 sm:mb-3 flex gap-4 sm:flex-wrap xl:flex-nowrap">
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img src="../public/social/twitter.svg" alt="twitter icon" />
                </router-link>
              </li>
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img
                    src="../public/social/linkedin.svg"
                    alt="linkedin icon"
                  />
                </router-link>
              </li>
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img src="../public/social/youtube.svg" alt="youtube icon" />
                </router-link>
              </li>
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img
                    src="../public/social/instagram.svg"
                    alt="instagram icon"
                  />
                </router-link>
              </li>
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img src="../public/social/m.svg" alt="m icon" />
                </router-link>
              </li>
              <li>
                <router-link class="text-white" to="/" aria-label="footer link">
                  <img src="../public/social/facebook.svg" alt="m icon" />
                </router-link>
              </li>
            </ul>
            <img
              src="../public/home/appStore.svg"
              class="block xl:mb-5 sm:mb-3"
              alt="appStore image"
            />
            <img
              src="../public/home/iphoneStore.svg"
              class="block"
              alt="iphoneStore image"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
$maincolor: #f5c614;

footer {
  background-color: #0d0f20;
  padding-top: 72px;
  padding-bottom: 72px;
  .footer {
    gap: 78px;

    @media (max-width: 768px) {
      gap: 40px;
    }
    .footer-logo {
      p {
        width: 290px;
      }
      .logo {
        width: 92px;
        height: 64px;
      }
    }
    li {
      font-size: 16px;
      a {
        transition: all 0.3s;
        &:hover {
          color: #f5c614;
          letter-spacing: 1.2px;
        }
      }
    }
  }
}
</style>