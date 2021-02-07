document.getElementById("searchButton").addEventListener("click", function () {
    showWarning("");
    document.getElementById("meal-details").style.display = 'none';
    
    const inputMealName = document.getElementById("input-meal-name").value;
    document.getElementById("input-meal-name").value = "";
    const mealName = inputMealName.trim();