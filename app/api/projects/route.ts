import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: process.env.AWS_REGION,
});

export async function GET(): Promise<NextResponse> {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: "nextjs-portfolio/projects.json",
  });

  try {
    const response = await s3.send(command);

    // Ensuring that response.Body is valid and convert to string
    if (!response.Body) {
      throw new Error("S3 response has no Body");
    }

    const str = await response.Body.transformToString();
    if (!str) {
      throw new Error("Failed to read response body as string");
    }
    console.log(str);

    // Safely parse JSON
    let jsonData;
    try {
      jsonData = JSON.parse(str);
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      throw new Error("Invalid JSON format received");
    }

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Error fetching object:", error);
    return new NextResponse("Error fetching projects", { status: 500 });
  }
}
