insert into property (user_id, prop_name, prop_desc, address, city, state, zip, img, loan_amount, monthly_mortgage, desired_rent)
values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *;