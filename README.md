git clone https://github.com/MEDOYED/Motion-Wise.git --> для того чтобы стянуть репозиторий с GitHub

---

git init
git add .
git commit -m " "
git branch -M main
git remote add origin https://github.com/MEDOYED/Motion-Wise.git
git push -u origin main

---

git pull origin main --> для того чтобы обновить код с ГитХаба

git log --> можно посмотреть версии комитов

git branch --> показывает в какой ветке мы находимся + список всех веток
git branch <nameBranch> --> добавить новую ветку
git branch -D <nameBranch> --> удалить ветку
git checkout <nameBranch, на которую хотим переключиться> --> команда чтобы переключиться на другую ветку
git branch -M main --> переименовывает ветку в main

git merge (nameBranch з якою треба злити) --> чтобы слить 2 ветки в одну

git checkout -- . --> Возвращает к последнему комиту
