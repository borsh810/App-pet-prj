'use strict';
window.addEventListener('DOMContentLoaded', function() {
	// List
	const categg = document.querySelector('.categg'),
		categss = document.querySelector('.categss'),
		listcategories = document.querySelector('.listcategories'),
		listdeals = document.querySelector('.listdeals'),
		barinput = document.querySelector('.barinput'),
		siggn = document.querySelector('.siggn'),
		rightlist = document.querySelector('.rightlist'),
		exit = document.querySelector('.exit'),
		listwhatnew = document.querySelector('.listwhatnew'),
		categwh =  document.querySelector('.categwh'),
		categpi = document.querySelector('.categpi'),
		listpickup = document.querySelector('.listpickup'),
		listsearch = document.querySelector('.listsearch');

		functionList(categg, listcategories, categss, listdeals, barinput, siggn, exit, rightlist, listwhatnew, categwh, categpi, listpickup,listsearch);

		function functionList(categg, listcategories, categss, listdeals, barinput, siggn, exit, rightlist, listwhatnew, categwh, categpi, listpickup,listsearch) {
			toggleClickNBlack(categg, listcategories, listdeals, listwhatnew, listpickup, listsearch);
			toggleClickNBlack(categss, listdeals, listcategories, listwhatnew, listpickup, listsearch);
			toggleClickNBlack(categwh, listwhatnew, listcategories, listdeals, listpickup, listsearch);
			toggleClickNBlack(categpi, listpickup, listcategories, listdeals, listwhatnew, listsearch);
			blackZone(rightlist);
			blackZone(listsearch);
			addActive(siggn, rightlist,listwhatnew,listcategories,listdeals,listpickup,listsearch);
			addActive(barinput, listsearch,listwhatnew,listcategories,listdeals,listpickup);

			function toggleClickNBlack(category, list, listTwo, listThree, listFour, listFive) {
				category.addEventListener('click', (e) => {
					e.preventDefault();
					list.classList.toggle('active');
					listTwo.classList.remove('active');
					listThree.classList.remove('active');
					listFour.classList.remove('active');
					listFive.classList.remove('active');
				});
				list.addEventListener('click', (e) => {
					if (e.target === list) {
						list.classList.remove('active');
						list.classList.add('hide');
					}
				});
			}
			function blackZone(list) {
				list.addEventListener('click', (e) => {
					if (e.target === list) {
						list.classList.remove('active');
						list.classList.add('hide');					
					}
				});
			}
			function addActive(target, list,listTwo,listThree,listFour, listOne,listFive) {
				target.addEventListener('click', (e) => {
					e.preventDefault();
					list.classList.add('active');
					if (e.target) {
						listTwo.classList.remove('active');
					listThree.classList.remove('active');
					listFour.classList.remove('active');
					listOne.classList.remove('active');
					listFive.classList.remove('active');
					}
				});
			}
			exit.addEventListener('click', () => {
				rightlist.classList.remove('active');
			});
		}
});