new Vue({
    el: '#app',
    data: {
        productName: '',
        costPrice: 0,
        sellingPrice: 0,
        margin: null,
    },
    methods: {
        calculateMargin() {
            if (this.costPrice > 0) {
                this.margin = (((this.sellingPrice - this.costPrice) / this.costPrice) * 100).toFixed(2);
            } else {
                alert("Please enter a valid cost price greater than 0.");
            }
        }
    }
});
