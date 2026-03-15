fetch("tools.json")
.then(res => res.json())
.then(data => {

const container = document.getElementById("toolsContainer");

data.forEach(tool => {

container.innerHTML += `
<div class="card">
<h3>${tool.name}</h3>
<p>${tool.desc}</p>
<a href="${tool.link}" target="_blank">Visit Tool</a>
</div>
`;

});

});
