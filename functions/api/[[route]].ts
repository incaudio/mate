import { z } from "zod";
import { insertSubscriberSchema } from "../../shared/schema";

export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Handle /api/subscribers POST
  if (path === "/api/subscribers" && request.method === "POST") {
    try {
      const body = await request.json();
      const input = insertSubscriberSchema.parse(body);

      // For Cloudflare Pages, we would typically use D1 (Cloudflare's database)
      // or another service. Since we're transitioning, we'll return a success response
      const subscriber = {
        id: crypto.randomUUID(),
        email: input.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return new Response(JSON.stringify(subscriber), {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            message: err.errors[0].message,
            field: err.errors[0].path.join("."),
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new Response(
        JSON.stringify({
          message: "Internal Server Error",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  // Default 404 for unknown routes
  return new Response(
    JSON.stringify({
      message: "Not Found",
    }),
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;

  if (request.method === "POST") {
    return onRequestPost(context);
  }

  return new Response(
    JSON.stringify({
      message: "Method Not Allowed",
    }),
    {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
