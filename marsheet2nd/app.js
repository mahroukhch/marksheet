let Nam= 'Mahroukh ch JS1-036'
let Roll= '<br>JS1-036'
let Teacher= '<br>Miss Shafaq Anees'

document.write(Nam + Roll + Teacher)

document.write('<table border=3px>')
let eng=90
let urdu=88
let maths=98
let com=99
let stat=90
let eco=87

document.write('<tr><th>Subject</th><th>Obtained mark</th><th>Total mark')
document.write('<tr><td>English</td><td>',eng,'<td>100</td></tr>')
document.write('<tr><td>Maths</td><td>',maths,'<td>100</td></tr>')
document.write('<tr><td>Urdu</td><td>',urdu,'<td>100</td></tr>')
document.write('<tr><td>Computer</td><td>',com,'<td>100</td></tr>')
document.write('<tr><td>Statistics</td><td>',stat,'<td>100</td></tr>')
document.write('<tr><td>Economics</td><td>',eco,'<td>100</td></tr>')


let total=eng+urdu+maths+com+stat+eco
document.write('<tr><td>Obtained Mark</td><td>',total,'<td>600</td></tr>')


let per= total /600*100
document.write('<tr><td>Percentage</td><td>',per,'<td></td></tr>')

if (per>=90)
{grade='A+1'}
else if(per>=80)
{grade='A+'}
else if(per>=70)
{grade='B+'}
else if(per>=60)
{grade='B'}
else if(per>=50)
{grade='C'}
else if(per>=40)
{grade='D'}

document.write('<tr><td>Grade</td><td>',grade,'<td></td></tr>')