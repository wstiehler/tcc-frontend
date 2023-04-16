export default function GetVersion() {
    fetch('https://api.github.com/repos/wstiehler/tcc-frontend/releases/latest')
    .then(response => response.json())
    .then(data => {
      document.getElementById('versao').textContent = data.tag_name;
    })
    .catch(error => console.error(error));
    return (
        <div>
            <p>Release: <span id="versao"></span></p>
        </div>
    );
}