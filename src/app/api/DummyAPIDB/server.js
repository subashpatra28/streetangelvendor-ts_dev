// @ts-expect-error TS(1208): 'server.ts' cannot be compiled under '--isolatedMo... Remove this comment to see the full error message
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./src/app/api/DummyAPIDB/db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  console.log("req.body", req.params, req.body);

  switch (req.url) {
    case "/management-role":
      if (["POST", "PUT"].indexOf(req.method) > -1) {
        let allPermissions = [
          {
            permissionId: 1,
            permission: "Monitoring",
            write: false,
            read: false,
          },
          {
            permissionId: 2,
            permission: "Live Tracking",
            write: false,
            read: false,
          },
          {
            permissionId: 3,
            permission: "Vehicle Journey",
            write: false,
            read: false,
          },
          {
            permissionId: 4,
            permission: "Driver Statistics",
            write: false,
            read: false,
          },
          {
            permissionId: 5,
            permission: "Vehicle Trip",
            write: false,
            read: false,
          },
          {
            permissionId: 6,
            permission: "Low Events",
            write: false,
            read: false,
          },
          {
            permissionId: 7,
            permission: "High Events",
            write: false,
            read: false,
          },
          {
            permissionId: 8,
            permission: "Request Video",
            write: false,
            read: false,
          },
          {
            permissionId: 9,
            permission: "Location Report",
            write: false,
            read: false,
          },
          {
            permissionId: 10,
            permission: "Event Report",
            write: false,
            read: false,
          },
          {
            permissionId: 11,
            permission: "Video Request Report",
            write: false,
            read: false,
          },
          {
            permissionId: 12,
            permission: "Device Report",
            write: false,
            read: false,
          },
          {
            permissionId: 13,
            permission: "Organization Report",
            write: false,
            read: false,
          },
          {
            permissionId: 14,
            permission: "Roles Management",
            write: false,
            read: false,
          },
          {
            permissionId: 15,
            permission: "Users Management",
            write: false,
            read: false,
          },
          {
            permissionId: 16,
            permission: "Organization Management",
            write: false,
            read: false,
          },
          {
            permissionId: 17,
            permission: "Support Tickets",
            write: false,
            read: false,
          },
          {
            permissionId: 18,
            permission: "Device Management",
            write: false,
            read: false,
          },
          {
            permissionId: 19,
            permission: "Driver Management",
            write: false,
            read: false,
          },
          {
            permissionId: 20,
            permission: "Import Device",
            write: false,
            read: false,
          },
          {
            permissionId: 21,
            permission: "GeoFencing",
            write: false,
            read: false,
          },
          {
            permissionId: 22,
            permission: "GeoFencing Event",
            write: false,
            read: false,
          },
          {
            permissionId: 23,
            permission: "VehicleTrip Report",
            write: false,
            read: false,
          },
          {
            permissionId: 24,
            permission: "First Connect",
            write: false,
            read: false,
          },
          {
            permissionId: 25,
            permission: "Device Status",
            write: false,
            read: false,
          },
          {
            permissionId: 26,
            permission: "Admin Notes",
            write: false,
            read: false,
          },
          {
            permissionId: 27,
            permission: "Crash Event",
            write: false,
            read: false,
          },
          {
            permissionId: 28,
            permission: "Panic Button Video",
            write: false,
            read: false,
          },
          {
            permissionId: 29,
            permission: "Support Ticket",
            write: false,
            read: false,
          },
          {
            permissionId: 30,
            permission: "Common Configuration",
            write: false,
            read: false,
          },
        ];
        req.body.permissions?.map((eachItem) => {
          let index = allPermissions.findIndex(
            (permission) => permission.permissionId == eachItem.permissionId
          );
          console.log("index found", index);
          if (index > -1) {
            console.log("{ ...allPermissions[index], ...eachItem }", {
              ...allPermissions[index],
              ...eachItem,
            });
            allPermissions[index] = { ...allPermissions[index], ...eachItem };
          }
        });
        delete req.body.permissions;
        req.body.rolePermission = allPermissions;
        console.log("final req.body", req.body);
      }
      next();
      break;
    case "/geo-fencing":
    case "/common-configuration":
    case "/project-management":
      req.body.id = new Date().getTime();
      next();
      break;

    default:
      // Continue to JSON Server router
      next();
  }
});

// Use default router
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
