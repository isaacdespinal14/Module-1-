console.clear()
type Employee = {
 name: string
 monthlySalary: number
 monthsWorked: number
 preAdvised: boolean
 cesanties: boolean
 vacations: boolean
 wantchristmas: boolean
 preAdvisedDays: number
 salaryPerDay: number
 preAdvisedTotal: number
 daysOfVacations: number
 christmasAmount: number
 amountCesanties: number
 cesantiesDays: number
 amountOfVacations: number
 subTotal: number
 total: number
 yearsWorking: number
}


let employee: Employee = {
 name: "Nereydo Antonio Duran",
 monthlySalary: 50000,
 monthsWorked: 24,
 yearsWorking: 0,
 salaryPerDay: 0,
 preAdvised: false,
 preAdvisedDays: 0,
 preAdvisedTotal: 0,
 cesanties: true,
 cesantiesDays: 0,
 amountCesanties: 0,
 vacations: false,
 daysOfVacations: 0,
 amountOfVacations: 0,
 wantchristmas: true,
 christmasAmount: 0,
 subTotal: 0,
 total: 0,
}
function monthstoyear(employee: Employee) {
employee.yearsWorking = employee.monthsWorked / 12
}


function preAdvisedDayscalculator(employee: Employee) {
 if (employee.preAdvised == false) {
   if (employee.monthsWorked <= 3) {
     employee.preAdvisedDays = 7
   }
   if (employee.monthsWorked > 3 && employee.monthsWorked <= 6) {
     employee.preAdvisedDays = 14
   }
   if (employee.monthsWorked > 6) {
     employee.preAdvisedDays = 28
   }
 }
 return employee.preAdvisedDays
}


function salaryPerDaycalculator(employee: Employee) {
 employee.salaryPerDay = (employee.monthlySalary / 23.83);
 return employee.salaryPerDay
}


function totalPreAdvised(employee: Employee){ 
 (employee.preAdvisedTotal=(employee.preAdvisedDays * employee.salaryPerDay))
 return employee.preAdvisedTotal
}


function employeeVacations(employee: Employee) {
 if (employee.vacations == false) {
   if (employee.monthsWorked <= 60) {
     employee.daysOfVacations = 14
   }
   if (employee.monthsWorked > 60) {
     employee.daysOfVacations = 18
   }
 }
 return employee.daysOfVacations
}


function vacationsCalculator(employee: Employee){
 employee.amountOfVacations = (employee.salaryPerDay * employee.daysOfVacations)
 return employee.amountOfVacations
}
/*el salario de navidad fue desarrollado de acuerdo a informaciones que busque sobre la formula,
no encontre la formula que se utiliza para este calculo*/
function christmasAmountcalculator(employee: Employee){
   employee.christmasAmount = employee.monthsWorked  * (employee.monthlySalary / 12)
 return employee.christmasAmount
}
function cesantiesDaysCalculator(employee: Employee) {
 if (employee.cesanties == true) {
   if (employee.monthsWorked <= 60) {
     employee.cesantiesDays = 21
   }
   if (employee.monthsWorked > 60){
     employee.cesantiesDays = 23
   }
 }
 return employee.cesantiesDays
}
function auxiliaryCesantiescalculator(employee: Employee) {
 employee.amountCesanties = (employee.cesantiesDays * employee.salaryPerDay)
 return employee.amountCesanties
}
function subTotalCalculator(employee: Employee) {
employee.subTotal = ((employee.preAdvisedTotal + employee.amountCesanties) + employee.amountOfVacations)
return employee.subTotal
}
function totalcalculator(employee: Employee) {
employee.total = (employee.subTotal + employee.christmasAmount)
return employee.total
}
monthstoyear(employee)
preAdvisedDayscalculator(employee)
salaryPerDaycalculator(employee)
totalPreAdvised(employee)
employeeVacations(employee)
christmasAmountcalculator(employee)
cesantiesDaysCalculator(employee)
auxiliaryCesantiescalculator(employee)
vacationsCalculator(employee)
subTotalCalculator(employee)
totalcalculator(employee)


console.log("Monto de preaviso",employee.preAdvisedTotal,
           "Monto de Cesantias",employee.amountCesanties,
           "Monto de Vacaciones",employee.amountOfVacations,
           "Monto de Navidad",employee.christmasAmount,
           "Sub-total",employee.subTotal,
           "Total",employee.total)
