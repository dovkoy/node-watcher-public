const ctx = document.getElementById('nodeOutputChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Activation Function',
            data: [],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }, {
            label: 'Output',
            data: [],
            fill: false,
            borderColor: 'red',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy'
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy'
                }
            }
        }
    }
});

// Activation functions
const activationFunctions = {
    linear: x => x,
    sigmoid: x => 1 / (1 + Math.exp(-x)),
    softmax: x => Math.exp(x) / (Math.exp(x) + Math.exp(-x)),
    relu: x => Math.max(0, x),
    leaky_relu: x => x > 0 ? x : 0.01 * x,
    tanh: x => Math.tanh(x),
    binary_step: x => x >= 0 ? 1 : 0
};

function populateDefaultCurve() {
    const activationFunction = document.getElementById('activation-function').value;
    updateCurve(activationFunction, 1, 0, 0); // Default curve
    updateCurve(activationFunction, 1, 0, 1); // Transformed curve
}

function updateCurve(activationFunction, weight, bias, datasetIndex) {
    let inputs = [];
    let outputs = [];
    for (let i = -5; i <= 5; i += 0.5) {
        inputs.push(i);
        let weightedInput = i * weight + bias;
        outputs.push(activationFunctions[activationFunction](weightedInput));
    }

    chart.data.labels = inputs;
    chart.data.datasets[datasetIndex].data = outputs;
    chart.update();
}

document.getElementById('activation-function').addEventListener('change', populateDefaultCurve);
document.getElementById('weight').addEventListener('input', function() {
    const activationFunction = document.getElementById('activation-function').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const bias = parseFloat(document.getElementById('bias').value);
    updateCurve(activationFunction, weight, bias, 1);
});
document.getElementById('bias').addEventListener('input', function() {
    const activationFunction = document.getElementById('activation-function').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const bias = parseFloat(document.getElementById('bias').value);
    updateCurve(activationFunction, weight, bias, 1);
});
document.getElementById('resetZoom').addEventListener('click', function() {
    chart.resetZoom();
});

populateDefaultCurve(); // Initial population of the curve
