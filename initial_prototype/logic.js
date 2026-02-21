
    function calculateYearsToRetirement(currentMonthlyExpenses, annualSavings, currentNetWorth) {
        const annualExpenses = currentMonthlyExpenses * 12;
        const targetFINumber = annualExpenses * 25;
        const annualReturn = 0.07;
        const inflation = 0.03;
        const realReturn = (1 + annualReturn) / (1 + inflation) - 1;
    
        let years = 0;
        let projectedNetWorth = currentNetWorth;
    
        if (projectedNetWorth >= targetFINumber) {
            return { yearsToRetirement: 0, targetFIDate: new Date().getFullYear(), targetFINumber: targetFINumber };
        }
    
        if (annualSavings <= 0 && projectedNetWorth < targetFINumber) {
            return { yearsToRetirement: Infinity, targetFIDate: "Never", targetFINumber: targetFINumber };
        }
    
        if (realReturn * projectedNetWorth + annualSavings <= 0 && projectedNetWorth < targetFINumber) {
            return { yearsToRetirement: Infinity, targetFIDate: "Never", targetFINumber: targetFINumber };
        }
    
        while (projectedNetWorth < targetFINumber && years < 100) {
            projectedNetWorth = projectedNetWorth * (1 + realReturn) + annualSavings;
            years++;
        }
    
        const targetYear = new Date().getFullYear() + years;
    
        return { 
            yearsToRetirement: years > 100 ? Infinity : years, 
            targetFIDate: years > 100 ? "Never" : targetYear,
            targetFINumber: targetFINumber 
        };
    }
    
