document.addEventListener("DOMContentLoaded", function () {
    // Recuperar pontuações salvas no localStorage
    const savedScores = JSON.parse(localStorage.getItem("scores")) || [];

    // Exibir pontuações
    const scoreList = document.getElementById("scoreList");
    savedScores.forEach(score => {
        addScoreToList(score.name, score.score);
    });

    // Adicionar nova pontuação
    window.addScore = function () {
        const nameInput = document.getElementById("name");
        const scoreInput = document.getElementById("score");

        const name = nameInput.value.trim();
        const score = parseInt(scoreInput.value);

        if (name && !isNaN(score)) {
            // Adicionar pontuação à lista
            addScoreToList(name, score);

            // Salvar pontuações no localStorage
            savedScores.push({ name, score });
            localStorage.setItem("scores", JSON.stringify(savedScores));

            // Limpar campos do formulário
            nameInput.value = "";
            scoreInput.value = "";
        } else {
            alert("Por favor, insira um nome e uma pontuação válidos.");
        }
    };

    function addScoreToList(name, score) {
        const li = document.createElement("li");
        li.textContent = `${name}: ${score}`;
        scoreList.appendChild(li);
    }
});
