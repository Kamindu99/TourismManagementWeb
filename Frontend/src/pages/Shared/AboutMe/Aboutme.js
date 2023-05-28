import React from 'react'
import './aboutus.css'

function Aboutme() {
  return (
    <div class="">
  <div class="container">

    <div class=" text-center">
    <h4 class="mb-0" style={{fontFamily:'monospace',color:'gray'}}>Designed and Developed by</h4>

      <div class="">
        <div class=" rounded  py-5 px-4"><img src="https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h4 class="mb-0">Kamindu Gayantha</h4>
          <span class="small text-uppercase text-muted">Software Engineer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link social-linkmy"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link social-linkmy"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link social-linkmy"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link social-linkmy"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      

    </div>
  </div>
</div>
  )
}

export default Aboutme