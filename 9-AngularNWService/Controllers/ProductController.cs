using _9_AngularNWService.Models.Data;
using _9_AngularNWService.Models.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _9_AngularNWService.Controllers
{
    
    public class ProductController : Controller
    {
        NORTHWNDEntities db = new NORTHWNDEntities();
        ProductModel model = new ProductModel();
        // GET: Product
        public ActionResult Index()
        {
            db.Configuration.LazyLoadingEnabled = false;
            model.productList = db.Products.ToList();
            model.clist = db.Categories.Select(x => new CategoriesSelect
            {
                CategoryID = x.CategoryID,
                CategoryName = x.CategoryName
            }).ToList();
            model.slist = db.Suppliers.Select(x => new SupplierSelect
            {
                SupplierID = x.SupplierID,
                CompanyName = x.CompanyName
            }).ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}