using Microsoft.AspNetCore.Mvc;

namespace ReleaseBoard.Api.Controllers;

[ApiController]
[Route("/health")]
public class HealthController : ControllerBase
{

    [HttpGet(Name = "HealthEndpointName")]
    public Object Get()
    {
        return Ok(new { Ok = true });
    }
}
