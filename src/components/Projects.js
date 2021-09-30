
function Projects() {
  return (
    <>
      <div id="projects" className="flexi-row py-4">
        <a target="_blank" rel="noreferrer" href="https://painterest.netlify.app/" alt="Painterest" className="proj-img-cont">
          <img className="proj-img" src="https://res.cloudinary.com/dk0r9bcxy/image/upload/v1633015751/portfolio-website/Screenshot_2021-09-30_at_16.27.55_gmiqdc.png" />
        </a>
        <div className="proj-desc-cont">
          <h2 className="text-align-center">Painterest (Pinterest Clone)</h2>
          <p className="text-align-center para">Create a user, upload paintings, follow and message other users. <br /><p className="no-m-para">Username: Guest &nbsp;&nbsp;&nbsp; Password: pass</p></p>
          <div className="flexi-row-2">
            <a className="icons" target="_blank" rel="noreferrer" href="https://painterest.netlify.app/" alt="Painterest"><i className="fas fa-link fa-2x"></i></a>
            <a className="icons" target="_blank" rel="noreferrer" href="https://github.com/eoin-barr/project-four-frontend" alt="Github repo"><i className="fab fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className="flexi-row py-4">
        <a target="_blank" rel="noreferrer" href="https://airstudio-project.netlify.app/" alt="AiStudio" className="proj-img-cont">
          <img className="proj-img" src="https://res.cloudinary.com/dk0r9bcxy/image/upload/v1633015744/portfolio-website/Screenshot_2021-09-30_at_16.28.16_adbkxe.png" />
        </a>
        <div className="proj-desc-cont">
          <h2 className="text-align-center">AirStudio (Airbnb Clone)</h2>
          <p className="text-align-center para">View, create, edit and book recording studios.<br /><p className="no-m-para">Email: guest@email.com &nbsp;&nbsp;&nbsp; Password: password</p></p>
          <div className="flexi-row-2">
            <a className="icons" target="_blank" rel="noreferrer" href="https://airstudio-project.netlify.app/" alt="AiStudio"><i className="fas fa-link fa-2x"></i></a>
            <a className="icons" target="_blank" rel="noreferrer" href="https://github.com/eoin-barr/project-three-frontend" alt="Github repo"><i className="fab fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects